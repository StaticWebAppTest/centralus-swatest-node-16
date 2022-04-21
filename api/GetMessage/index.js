module.exports = async function (context, req) {
  const date = "2022-04-21T09:11:27.897Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

