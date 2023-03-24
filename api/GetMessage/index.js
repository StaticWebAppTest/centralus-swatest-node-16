module.exports = async function (context, req) {
  const date = "2023-03-24T09:09:30.768Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

