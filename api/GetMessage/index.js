module.exports = async function (context, req) {
  const date = "2024-09-28T11:10:07.946Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

