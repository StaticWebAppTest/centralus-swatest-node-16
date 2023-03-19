module.exports = async function (context, req) {
  const date = "2023-03-19T11:07:27.526Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

