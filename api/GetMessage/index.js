module.exports = async function (context, req) {
  const date = "2023-03-21T11:07:45.946Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

