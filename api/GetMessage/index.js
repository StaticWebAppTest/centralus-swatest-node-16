module.exports = async function (context, req) {
  const date = "2022-07-09T05:09:07.300Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

