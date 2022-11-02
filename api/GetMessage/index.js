module.exports = async function (context, req) {
  const date = "2022-11-02T06:19:07.597Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

