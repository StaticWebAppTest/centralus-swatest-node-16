module.exports = async function (context, req) {
  const date = "2022-05-23T21:10:23.962Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

