module.exports = async function (context, req) {
  const date = "2022-09-11T19:09:11.281Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

