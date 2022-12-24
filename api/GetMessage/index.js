module.exports = async function (context, req) {
  const date = "2022-12-24T07:08:03.292Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

