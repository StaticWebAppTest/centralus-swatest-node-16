module.exports = async function (context, req) {
  const date = "2022-11-11T07:12:03.694Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

