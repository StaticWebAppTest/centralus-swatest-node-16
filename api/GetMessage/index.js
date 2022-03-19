module.exports = async function (context, req) {
  const date = "2022-03-19T18:11:19.900Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

