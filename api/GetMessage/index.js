module.exports = async function (context, req) {
  const date = "2023-04-19T07:08:50.896Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

