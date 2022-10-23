module.exports = async function (context, req) {
  const date = "2022-10-23T11:10:57.117Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

