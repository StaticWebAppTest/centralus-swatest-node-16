module.exports = async function (context, req) {
  const date = "2022-03-04T11:09:08.312Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

