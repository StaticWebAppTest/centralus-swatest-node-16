module.exports = async function (context, req) {
  const date = "2022-07-12T17:15:52.149Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

