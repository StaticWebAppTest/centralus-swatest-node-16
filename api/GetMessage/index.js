module.exports = async function (context, req) {
  const date = "2022-07-19T18:13:53.196Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

