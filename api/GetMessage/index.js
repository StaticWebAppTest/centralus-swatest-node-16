module.exports = async function (context, req) {
  const date = "2022-03-09T09:09:58.900Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

