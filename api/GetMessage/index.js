module.exports = async function (context, req) {
  const date = "2022-08-04T10:11:57.605Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

