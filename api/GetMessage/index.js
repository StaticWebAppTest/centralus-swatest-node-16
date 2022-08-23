module.exports = async function (context, req) {
  const date = "2022-08-23T11:09:39.281Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

