module.exports = async function (context, req) {
  const date = "2022-11-28T18:12:52.015Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

