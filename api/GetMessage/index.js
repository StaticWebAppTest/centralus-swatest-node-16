module.exports = async function (context, req) {
  const date = "2022-05-23T15:21:19.141Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

