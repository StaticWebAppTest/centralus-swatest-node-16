module.exports = async function (context, req) {
  const date = "2022-09-06T09:11:43.900Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

