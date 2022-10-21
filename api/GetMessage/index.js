module.exports = async function (context, req) {
  const date = "2022-10-21T03:42:21.874Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

