module.exports = async function (context, req) {
  const date = "2022-02-23T15:10:40.898Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

