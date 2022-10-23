module.exports = async function (context, req) {
  const date = "2022-10-23T09:15:01.576Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

