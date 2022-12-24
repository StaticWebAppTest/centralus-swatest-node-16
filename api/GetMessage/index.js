module.exports = async function (context, req) {
  const date = "2022-12-24T08:11:21.196Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

