module.exports = async function (context, req) {
  const date = "2022-09-23T12:24:58.449Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

