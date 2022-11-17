module.exports = async function (context, req) {
  const date = "2022-11-17T05:11:05.653Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

