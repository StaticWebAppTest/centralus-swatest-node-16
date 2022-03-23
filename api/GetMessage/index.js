module.exports = async function (context, req) {
  const date = "2022-03-23T15:11:00.149Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

