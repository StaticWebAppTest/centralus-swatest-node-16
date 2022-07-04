module.exports = async function (context, req) {
  const date = "2022-07-04T10:12:11.281Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

