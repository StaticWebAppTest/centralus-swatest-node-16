module.exports = async function (context, req) {
  const date = "2024-10-28T11:10:52.916Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

