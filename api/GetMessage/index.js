module.exports = async function (context, req) {
  const date = "2022-09-24T14:10:03.900Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

