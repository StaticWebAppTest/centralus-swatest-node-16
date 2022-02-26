module.exports = async function (context, req) {
  const date = "2022-02-26T09:09:00.874Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

