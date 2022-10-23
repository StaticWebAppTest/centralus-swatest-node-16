module.exports = async function (context, req) {
  const date = "2022-10-23T06:23:46.546Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

