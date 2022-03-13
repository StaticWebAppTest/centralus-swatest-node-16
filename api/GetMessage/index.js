module.exports = async function (context, req) {
  const date = "2022-03-13T14:09:09.193Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

