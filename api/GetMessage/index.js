module.exports = async function (context, req) {
  const date = "2022-12-09T18:11:52.495Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

