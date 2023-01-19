module.exports = async function (context, req) {
  const date = "2023-01-19T07:09:09.094Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

