module.exports = async function (context, req) {
  const date = "2022-05-09T14:09:53.189Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

