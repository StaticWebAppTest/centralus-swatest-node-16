module.exports = async function (context, req) {
  const date = "2022-08-11T18:13:14.796Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

