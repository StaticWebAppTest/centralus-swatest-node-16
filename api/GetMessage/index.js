module.exports = async function (context, req) {
  const date = "2023-02-09T20:10:30.189Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

