module.exports = async function (context, req) {
  const date = "2022-10-04T04:52:53.149Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

