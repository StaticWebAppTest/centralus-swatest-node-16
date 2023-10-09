module.exports = async function (context, req) {
  const date = "2023-10-09T09:09:39.552Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

