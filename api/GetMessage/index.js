module.exports = async function (context, req) {
  const date = "2022-12-23T15:09:13.476Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

