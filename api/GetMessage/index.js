module.exports = async function (context, req) {
  const date = "2022-10-23T10:13:15.281Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

