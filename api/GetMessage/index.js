module.exports = async function (context, req) {
  const date = "2022-12-03T11:07:15.358Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

