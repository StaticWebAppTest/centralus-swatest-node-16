module.exports = async function (context, req) {
  const date = "2022-11-23T18:12:15.252Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

