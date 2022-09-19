module.exports = async function (context, req) {
  const date = "2022-09-19T18:17:45.722Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

