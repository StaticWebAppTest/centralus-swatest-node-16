module.exports = async function (context, req) {
  const date = "2022-09-19T13:43:07.790Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

