module.exports = async function (context, req) {
  const date = "2022-07-03T13:19:28.189Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

