module.exports = async function (context, req) {
  const date = "2023-05-19T11:07:15.621Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

