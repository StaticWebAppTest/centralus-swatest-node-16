module.exports = async function (context, req) {
  const date = "2022-08-11T17:14:19.657Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

