module.exports = async function (context, req) {
  const date = "2023-07-28T11:07:21.258Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

