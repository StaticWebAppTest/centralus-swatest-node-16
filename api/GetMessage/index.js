module.exports = async function (context, req) {
  const date = "2023-09-09T16:09:45.475Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

